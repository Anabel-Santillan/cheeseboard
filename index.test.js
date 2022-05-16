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
});

describe('Checking model relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test('Checking that user can have many boards', () => {
        async() => {
            //Creating multiple boards and one User
            const board1 = await Board.create({name: 'Maple board', description: 'Maple Board with varnish', rating: 5});
            const board2 = await Board.create({name: 'Walnut', description: 'Walnut Board with wax', rating: 4});
            const JimH = await User.create({name: 'Jim Halpert', email: 'jhalpert@gmail.com'});

            await JimH.addBoard('Maple board');
            await JimH.addBoard('Walnut');

            const JimBoards = await JimH.getBoards();

            expect(JimBoards.length).toBe(2);
            expect(JimBoards[0]).toBeInstanceOf(Board);


        }
    })

    test('Checking that cheese & boards is a many to many relationship', () => {
        async() => {
            const board1 = await Board.create({name: 'Maple board', description: 'Maple Board with varnish', rating: 5});
            const board2 = await Board.create({name: 'Walnut', description: 'Walnut Board with wax', rating: 4});
            const provelone = await Cheese.create({title: "Provelone", description: "Low in calorie and delicious."});
            const sharpCheddar = await Cheese.create({title: "Sharp Cheddar", description: "Very popular cheese"});

            await board1.addCheese('Provelone');
            await board1.addCheese('Sharp Cheddar');
            await provelone.addBoard('Maple board');
            await provelone.addBoard('Walnut');

            const board1Cheeses = await board1.getCheese();
            const proveloneBoards = await provelone.getBoard();

            expect(board1Cheeses.length).toBe(2);
            expect(proveloneBoards.length).toBe(2);
        }
    })

    test('Cheese-board relationship is working', () => {
        async() => {
            const board1 = await Board.create({name: 'Maple board', description: 'Maple Board with varnish', rating: 5});
            const provelone = await Cheese.create({title: "Provelone", description: "Low in calorie and delicious."});

            await board1.addCheese('Provelone');

            expect(board1[0]).toBeInstanceOf(Cheese);
        }
    })
})