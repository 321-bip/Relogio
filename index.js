
function hora()
 {
     let time = new Date();
     let horas = time.getHours();
     let minutos = time.getMinutes();
     let segundos = time.getSeconds();
     let horaAtual = [];
         horaAtual.push(horas);
         horaAtual.push(minutos);
         horaAtual.push(segundos);

         return horaAtual;
 }
 
function relogio()
 {
    let funsaoHoras = hora();
    let ponteiroSegundos = document.getElementById("ponteiroSgundos");
    let ponteiroMinutos = document.getElementById("ponteiroMinutos");
    let ponteiroHoras = document.getElementById("ponteirohoras");
    let segundos = funsaoHoras[2];
    let minutos = funsaoHoras[1];
    let horas = funsaoHoras[0];
    let degSegundos = 6;
    let degminutos = 6;
    let degHoras;
        degSegundos = (segundos * degSegundos) - 90;
        ponteiroSegundos.style.transform='rotate('+degSegundos+'deg)';

        degminutos = (degminutos * minutos) - 90;
        ponteiroMinutos.style.transform='rotate('+degminutos+'deg)';

        if(horas == 1 || horas == 13)
         {
           degHoras = 300;
         }
        else if(horas == 2 || horas == 14)
         {
           degHoras = 330;
         }
        else if(horas == 3 || horas == 15)
         {
            degHoras == 360;
         }
        else if(horas == 4 || horas == 16)
         {
            degHoras =30;
         }         
        else if(horas == 5 || horas == 17)
         {
            degHoras = 60;
         }
        else if(horas == 6 || horas == 18)
         {
            degHoras = 90;
         }  
        else if(horas == 7 || horas == 19)
         {
            degHoras = 120;
         }
        else if(horas == 8 || horas == 20)
         {
            degHoras = 150;
         }
        else if(horas == 9 || horas == 21)
         {
            degHoras = 180;
         } 
        else if(horas == 10 || horas == 22)
         {
            degHoras = 210;
         }
        else if(horas == 11 || horas == 23)
         {
            degHoras = 240;
         }      
        else if(horas == 12 || horas == 00)
         {
            degHoras = 270
         }
           ponteiroHoras.style.transform='rotate('+degHoras+'deg)';
 }

function principal()
 {
   setInterval(relogio,1000);
 } 

 principal();

