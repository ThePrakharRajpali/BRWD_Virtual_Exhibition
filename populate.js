const mongoose = require('mongoose');

const Project = require('./models/project.js');

const newData = [
    {
        name: "Abhilash Gayan",
        photos: [
            "/Exhibition/Abhilash Gayan/1 - Abhilash Gayan.jpeg", 
            "/Exhibition/Abhilash Gayan/2 - Abhilash Gayan.jpeg",
            "/Exhibition/Abhilash Gayan/3 - Abhilash Gayan.jpeg",
            "/Exhibition/Abhilash Gayan/4 - Abhilash Gayan.jpeg"
        ],
        title: "The Brahmaputra,The Riverine Fishing Communities and The Uzan Bazar Fish Market",
        writeup: `Fishing is the primary occupation of various native riverine groups. 
        The Brahmaputra boasts a rich biodiversity and serves as the lifeline of the native fishing communities. 
        These images captured near the Uzan Bazar ghat in Guwahati, gives us an idea about the lives of the people of these communities and their work culture. 
        The  fishermen venture out deep into the vastness of the Brahmaputra early in the morning. 
        After they return with their catch, they may sell the fish directly in the nearby markets or sell it to different vendors. 
        A major part of the fish catch is marketed fresh in the local fishmarkets. 
        Located at the Uzan Bazar ghat at the south bank of the Brahmaputra, the Uzan Bazar fish market is one of the largest in the region. 
        This market never fails to impress a fish lover with its huge variety. 
        The place is vastly crowded in the morning hours as plenty of people rush to grab their share of freshly caught fish from the market. 
        The Uzan Bazar fish market holds great significance as the livelihoods of the local fishermen and fish vendors are primarily dependent on the market and the river. 
        It also gives an impression of the rich fishing culture of the native people. 
        This is a beautiful example of how the Brahmaputra supports the lives of many local communities and boosts their businesses.`,
        bio: `I am Abhilash Gayan and I am a master’s student at Tezpur University. I am a hobbyist photographer and a beginner. I believe that a photo is worth the story it tells.`,
        twitter: "",
        instagram: "@abhilash_gayan",
        index: 1
    },


]
module.exports.populateDB = () => {
    newData.forEach(data => {
        var newProject = new  Project(data);

        newProject.save(err => {
            if(err) throw err;
            else {
                console.log('Project saved')
                console.log(newProject);
            }
        });
    });
};

module.exports.clearDB = () => {
    Project.deleteMany({}, err => {
        if(err) throw err;
        else {
            console.log('Database cleared.')
        }
    });
};