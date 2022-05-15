const {sequelize} = require('./db');
const {Cheese} = require('./Cheese');
const {Board} = require('./Board');
const {User} = require('./User');

describe('Checking models are working', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test('Checking Cheese model is working', () =>{
        async() => {
            const testCheese = await Cheese.create({name: 'gouda', description: 'smokey'});
            expect(testCheese.name).toBe('gouda');
            expect(testCheese.description).toBe('smokey');
        }
    })

    test('Checking Board model is working', () =>{
        async() => {
            const testBoard = await Board.create({name: 'Maple board', description: 'Maple Board with varnish', rating: 5});
            expect(testBoard.name).toBe('Maple board');
            expect(testBoard.description).toBe('Maple Board with varnish');
            expect(testBoard.rating).toBe(5);
        }
    })

    test('Checking User model is working', () =>{
        async() => {
            const testUser = await User.create({name: 'Jim Halpert', email: 'jhalpert@gmail.com'});
            expect(testUser.name).toBe('Jim Halpert');
            expect(testUser.email).toBe('jhalpert@gmail.com');
        }
    })

    test('testName', () =>{
        async() => {
            
        }
    })

    test('testName', () =>{
        async() => {
            
        }
    })

    test('testName', () =>{
        async() => {
            
        }
    })
})