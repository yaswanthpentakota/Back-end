const getUserDetails = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log({ roll: "23A91A0577" });
            resolve("User details received");  
        }, 2000);
    });
};

const myfun = async () => {
    console.log("marks");

    const result = await getUserDetails("100");
    console.log(result);
    console.log({ roll: "23A91A05F5 hjfvgb" });
}; 

myfun();