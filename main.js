// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(str) {
    if(str.userRole === 'ADMIN'){
        return true
    }else{
        return false
    }
}

function getEmail(str) {
    var email = (str.firstName.toLowerCase() + "." + str.lastName.toLowerCase() + "@codeimmersives.com")
    return email
}

function getPlaylistLength(str) {
    output = str.songs.length
    return output
}


function getHardestHomework(str) {
    let hardest = ""
    let lowest = 1000
    for(const score of str) {
        if(score.averageScore < lowest) {
            lowest = score.averageScore;
            hardest = score.name;
        }
        };
        return hardest;
        
    }    


test1 = getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
])
    
test1
function createPhonebook(name,phone){
    let obj = {};
    for (let i = 0; i < name.length; i++){
        obj[name[i]] = phone[i];
    }
    return obj;
}




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};