import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient({log: ['query']})
const prisma = new PrismaClient()

async function main() {
    // all the prisma queries goes here 

    // const user = await prisma.user.create({ data: { name: 'Rajesh'} });
    // const users = await prisma.user.findMany();
    // console.log(users);

    // await prisma.user.deleteMany()
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'Tejas',
    //         age: 22,
    //         email: 'vzKQp@example.com',
    //         userPreference:{
    //             create:{
    //                 emailUpdates:true
    //             } 
    //         }
    //     },
    //     // include:{
    //     //     userPreference: true
    //     // },
    //     select:{ // you can do select / include only . you can not do both at the same time.
    //         name: true,
    //         userPreference: { select: { id:true }}
    //     }
    // })

    // const users = await prisma.user.createMany({
    //     data:[
    //         {
    //             name: 'Tejas',
    //             age: 22,
    //             email: 'vzKQp@example.com',
    //         },
    //         {
    //             name: 'Prajwal',
    //             age: 19,
    //             email: 'vzKQas@example.com',
    //         }
    //     ]
    // })

    // const user = await prisma.user.findUnique({
    //     where:{
    //         name_age:{
    //             age:22,
    //             name:'Tejas'
    //         }
    //     }
    // });

    // const user = await prisma.user.findFirst({
    //     where:{
    //         name:'Prajwal'
    //     }
    // })

    const users = await prisma.user.findMany({
        where:{
            // name: { equals: 'Tejas'},
            // name: { not: 'Tejas'}
            // name: { in: ['Tejas', 'Prajwal']}
            // name: { notIn: ['Tejas', 'Prajwal']}
            // age: {lt: 20}
            // age: {gt: 20}
            // email: { contains: '@gmail.com' }
            // email: {endsWith: '@gmail.com'}
            // email: {startsWith: 'tejas'}
            // AND : [
            //     { name: 'Tejas'},
            //     { age: 22}
            // ]
            // OR : [
            //     { name: 'Tejas'},
            //     { age: 22}
            // ]
            // NOT: { email: 'vzKQas@example.com' }

        },
        orderBy: { age: 'desc' },
        take: 2, // pagination
        // skip: 2
    });


    // there are some,every,none in relations

    // update will update the first user in which where is matched. But updateMany will update all the users which are matched. 
    // const user = await prisma.user.update({
    //     where:{ email: 'vzKQp@example.com'},
    //     data:{
    //         email: 'tejas@gmail.com',
    //         age:{
    //             increment:10,
    //             multiply:2,
    //             divide:2,
    //         }
    //     }
    // })

    // const preference = prisma.userPreference.create([
    //     data:{
    //         emailUpdates: true
    //     }
    // ])
    // const user = await prisma.user.create({
    //     data:{
    //         name:'Rajesh',
    //         age:80,
    //         email:"rajesh@gmail.com",
    //         userPreference:{
    //             connect:{
    //                 id:"preferenceID"
    //             }
    //         }
    //     }
    // })

    // similarly we can do disconnect which will make it the value null

    
    const user = await prisma.user.delete({
        where:{
            email: 'tejas@gmail.com'
        }
    })

    // delete many will delete all the users which are matched


    // console.log(users.length)
    console.log(users)
}

main()
    .catch( e => console.error(e.message) )
    .finally( async () => await prisma.$disconnect() )