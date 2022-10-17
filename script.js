var botao = window.document.getElementById('button')
function mudacor() {
        botao.style.backgroundColor = 'rgba(255, 255, 255, 0.329)'
        botao.style.boxShadow = '3px 2px 5px rgb(0, 0, 0)'
        
        
}
function voltacor() {
    botao.style.backgroundColor = '#2F7058'
}






function calcular(){

 var data = new  Date();
 var ano = data.getFullYear();    
 var idade = document.getElementById('idvalor');
 var genero = "Desconhecida"
 
 
if (idade.value.length == 0 || Number(idade.value) > ano ) {
    window.alert('ERRO insira uma ano de nascimento válido!')
} else {

      if (sexo[0].checked){
         genero = 'Homem'
         var res = ano - Number(idade.value)
         if (res < 10){
         foto.innerHTML = '<img src=bebehomem.png>'}
         else if (res < 18){
            foto.innerHTML = '<img src=adolescentehomem.png>'
         } else if (res < 60){
            foto.innerHTML = '<img src=homemeadulto.png>'
         } else if (res > 60){
            foto.innerHTML = '<img src=homemidoso.png>'
         }
         
         resultado.innerHTML = `Detectamos  ${genero} com idade ${res} anos`
      } else {
         if (sexo[1].checked){
            genero = 'Mulher'
            var res = ano - Number(idade.value)
            if (res < 10){
               foto.innerHTML = '<img src=bebefeminina.png>'}
               else if (res < 18){
                  foto.innerHTML = '<img src=adolescentefemin.png>'
               } else if (res < 60){
                  foto.innerHTML = '<img src=mulheradulta.png>'
               } else if (res > 60){
                  foto.innerHTML = '<img src=idosafemin.png>'
               }

            
            resultado.innerHTML = `Detectamos  ${genero} com idade ${res} anos`
         } else {
            if (genero == "Desconhecida") { 
               window.alert('ERRO selecionar o gênero')
            } 
         }
      }
   }
   
}




     







