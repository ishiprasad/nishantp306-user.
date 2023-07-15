export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        username: "John",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Second comment",
        username: "Kevin",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Third comment first child",
        username: "Alex",
        userId: "3",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Fourth comment second child",
        username: "Jack",
        userId: "4",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "5",
        body: " Fifth comment second child",
        username: "Jack",
        userId: "5",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "6",
        body: "Sixth comment second child",
        username: "Jack",
        userId: "6",
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };