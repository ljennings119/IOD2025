const friends = require("../models/friends");

// GET all friends
exports.getAllFriends = (req, res) => {
    res.json(friends);
};

// GET friend by ID
exports.getFriendById = (req, res) => {
    const id = parseInt(req.params.id);
    const friend = friends.find(f => f.id === id);
    if (friend) res.json(friend);
    else res.status(404).json({ error: `Friend with ID ${id} not found` });
};

// FILTER 
exports.filterFriends = (req, res) => {
    let { gender, letter } = req.query;
    let filtered = [...friends];

    if (gender) filtered = filtered.filter(f => f.gender.toLowerCase() === gender.toLowerCase());
    if (letter) filtered = filtered.filter(f => f.name.startsWith(letter));

    if (filtered.length > 0) res.json(filtered);
    else res.status(404).json({ error: "No friends matching criteria" });
};

// GET
exports.getRequestInfo = (req, res) => {
    res.json({
        "user-agent": req.headers['user-agent'],
        "content-type": req.headers['content-type'],
        "accept": req.headers['accept']
    });
};

// POST 
exports.createFriend = (req, res) => {
    const newFriend = req.body;
    if (!newFriend.name || !newFriend.gender) {
        return res.status(400).json({ error: "Friend object must contain name and gender" });
    }
    newFriend.id = friends.length + 1;
    friends.push(newFriend);
    res.status(201).json(newFriend);
};

// PUT (update)
exports.updateFriend = (req, res) => {
    const id = parseInt(req.params.id);
    const index = friends.findIndex(f => f.id === id);
    if (index === -1) return res.status(404).json({ error: `Friend with ID ${id} not found` });

    friends[index] = { ...friends[index], ...req.body };
    res.json(friends[index]);
};

// DELETE
exports.deleteFriend = (req, res) => {
    const id = parseInt(req.params.id);
    const index = friends.findIndex(f => f.id === id);
    if (index === -1) return res.status(404).json({ error: `Friend with ID ${id} not found` });

    const deleted = friends.splice(index, 1);
    res.json({ message: "Friend deleted", deleted });
};
