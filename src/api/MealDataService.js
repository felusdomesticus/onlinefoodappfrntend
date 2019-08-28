import axios from 'axios';

class MealDataService{
    retrieveAllMeals(){
        console.log('execute started');
        return axios.get('http://localhost:8034/meals/all');
    };

    deleteMeal(code){
        console.log('execute started');
        return axios.delete(`http://localhost:8034/meals/${code}`);
    };
}

export default new MealDataService();