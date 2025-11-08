const express = require("express");
const router = express.Router();
const friends = require('../models/friends')


// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend


// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender.toLowerCase() === filterGender.toLowerCase());
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No friends matching criteria" });
    }
});

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    const info = {
        'user-agent': req.headers['user-agent'],
        'content-type': req.headers['content-type'],
        'accept': req.headers['accept']
    };
    res.json(info);
});


// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', (req, res) => {
    let friendId = parseInt(req.params.id);
    let friend = friends.find(f => f.id === friendId);

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({ error: `Friend with ID ${friendId} not found` });
    }
});


// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    let friendId = parseInt(req.params.id);
    let index = friends.findIndex(f => f.id === friendId);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with ID ${friendId} not found` });
    }

    // Update friend data
    friends[index] = { ...friends[index], ...req.body };
    res.status(200).json(friends[index]);
});


// adding delete
router.delete('/:id', (req, res) => {
    let friendId = parseInt(req.params.id);
    let index = friends.findIndex(f => f.id === friendId);

    if (index === -1) {
        return res.status(404).json({ error: `Friend with ID ${friendId} not found` });
    }

    const deletedFriend = friends.splice(index, 1);
    res.status(200).json({ message: 'Friend deleted', deleted: deletedFriend });
});


module.exports = router;