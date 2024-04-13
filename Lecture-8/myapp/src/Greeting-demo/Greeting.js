import React from 'react';

let TimeDate = new Date(2024,11,20,19);

let Time  = TimeDate.getHours();

let Greetings = "";


if(Time < 12){
    Greetings = "Good Morning"
}
else if(Time >= 12 && Time < 19){
    Greetings = "Good AfterNoon"
}
else{
    Greetings = "Good Night"
}

function Greeting () {

    return <div>
             <img src="https://img.freepik.com/premium-photo/painter-background_1426-14873.jpg?w=826" height={900} width={600} className="ms-[310px] mt-16" alt='bn' ></img>
             
            <h2 className="text-4xl font-bold text-black-500 hover:text-red-600 absolute top-44 text-center left-[430px] mt-16 border border-dashed border-y-blue-800">
                    Hello Sir , {Greetings}
            </h2>
            </div>
}


export default Greeting;


             