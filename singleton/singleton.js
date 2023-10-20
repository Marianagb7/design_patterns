// Singleton design pattern example

class YearMonths {

    monthsEs=["Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"];

    monthsEn=["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
   
    constructor(lang){
        this.lang=lang;
        if(YearMonths.instance){
            return YearMonths.instance;

        }  

        YearMonths.instance = this;
    }
    getMonths(){
        return this.lang === "es"?
        this.monthsEs:
        this.monthsEn;

    } 
    
}


const yearMonths = new YearMonths("es");
const yearMonths2 = new YearMonths("");
console.log(yearMonths.getMonths(""));
console.log(yearMonths2.getMonths());





