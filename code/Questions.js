class Questions {

    constructor(){

        this.access1 = createInput("Respuesta...")
        this.access1.position(950,500);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(1010,530);
        this.button1.style('background', 'lightgrey');
    }

    display(){
        QuestionsReact();

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
            } else {
                this.button1.style('background','red');

            }
        });
    }
}