class food{
    constructor(){
        this.foodS = 20;
        this.lastFed = 0;
        this.image = loadImage("images/Milk.png");
    }

    getFoodStock(){
        var foodStockRef = database.ref('Food');
        foodStockRef.on("value",function(data){
            foodS = data.val();
        })
    }
    
    updateFoodStock(stock){
        database.ref('/').update({
            Food: stock
        })

    }

    deductFood(){
        this.foodS-1;
    }

    display(){
        var x = 100, y = 300;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodS!=0){
            for(var i = 0;i<this.foodS;i++){
                if(i%10===0){
                    x=100;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

    }
}
