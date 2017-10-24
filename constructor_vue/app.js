function WalkingDead (name, team, img){
    this.name = name
    this.team = team
    this.img = img
}

const walkingDead = []

const rick = new WalkingDead('Rick Grimes', ['Rick'], 'http://ll-c.ooyala.com/e1/Y3Y21sYzE6Pys61NdA2BdqVwlIt39aqX/promo329185466');
const negan = new WalkingDead('Negan', ['Negan'], 'https://media.vanityfair.com/photos/580e697ab51898e27e054d5a/master/pass/the-walking-dead-negan.jpg');
const daryl = new WalkingDead('Daryl Dixon', ['Rick'], 'https://cdn.inquisitr.com/wp-content/uploads/2017/06/Norman-Reedus-In-Alabama-What-About-Filming-TWD-Season-8-In-Georgia-What-Does-This-Mean-For-Daryl-Di.jpg');
const bat = new WalkingDead('Lucille', ['Negan'], 'https://images-na.ssl-images-amazon.com/images/I/41whiQkNioL.jpg');

walkingDead.push(rick, negan, daryl, bat)

console.log(walkingDead)

const walkingDeadVue = {
    el: "#dead-app",
    data: {
        title: 'Dead Teams',
        walkingDead: walkingDead,
        newWalkingDeadName: '',
        newWalkingDeadTeam: [],
        newWalkingDeadImg: ''
    },
    
}

