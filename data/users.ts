enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  PARENT = 'PARENT',
  CHILD = 'CHILD',
}

export const users = [
  {
    id: '687a9284-233f-4b2a-b55a-a222737e438c',
    name: 'Joe',
    email: 'joe@mail.com',
    emailVerified: true,
    role: Role.ADMIN,
    createdAt: '2022-09-01T04:50:17.128Z',
    updatedAt: '2022-09-01T04:49:55.231Z',
    // profile: {
    //   id: 'd7ce2d19-b80a-4564-a2b6-cab970ade104',
    //   age: 28,
    //   birthday: '1994-06-29T00:00:00.000Z',
    //   bio: 'Parent and household creator',
    //   mood: 'Okay',
    //   favoriteFood: 'Subs',
    //   favoriteColor: 'Red',
    //   userId: '687a9284-233f-4b2a-b55a-a222737e438c',
    // },
  },
];
