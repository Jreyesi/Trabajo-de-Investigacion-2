class calculadora{
      limpiar(){
       let resul = document.getElementById("result")
       resul.value=""
      }
 
      divisores(){
         let result= document.getElementById("result")
         let o=0
         let i=1
         let nume= parseInt(result.value)
         for( i=1;i<nume;i++){
            if (nume%i==0){
               o=o+i+",".toString()
            }

         }
         result.value=o
      } 

      invertir(){
         let result= document.getElementById("result")
         let c=0,digito=""
         let num= parseInt(result.value)
         while(num>0){
            c=num%10
            num=Math.floor(num/10)
            digito=digito + c.toString()
         }
         result.value= digito
      }
 
      primo(){
        let result=document.getElementById("result")
        let dig=0,c=0,resp=""
        let num= parseInt(result.value)
        while (c<=num) {
            if (num%c==0) {
               dig=dig+1
               console.log(dig)
            }
            c=c+1
         }
         if (dig==2) {
            resp=resp+num+" es un numero primo".toString()
         }else{
            resp=resp+num+" no es un numero primo".toString()
         }
         result.value=resp
      }
 
      perfecto(){
        let result=document.getElementById("result")
        let respu=0,per="",i=1
        let num=parseInt(result.value)
        for(i=1;i<num;i++){
          if ((num%i)==0) {
             respu=respu+i
            } 
         } 
        if (respu==num) {
            per=per+num+" es un numero perfecto".toString() 
        }else{
            per=per+num+" no es un numero perfecto".toString() 
        }
        result.value=per     
      }

      fibonachi(){
         let result = document.getElementById("result")
         let num1
         let sf=[0,1]
         num1 = parseFloat(result.value)
         if (Number.isInteger(num1)&& num1>0){
           if(num1==1){
             result.value="0"
           }else{
             if(num1==2){
               result.value=sf.toString()
           }
           }
           for(let i=2; i<=num1-1;i++){
             sf[i]=sf[i-1]+sf[i-2]
             result.value=sf.toString()
             console.log(sf.toString())
           }
         }else{
           result.value="Ingrese un valor numerico mayor a 1"
         }
      } 
 
      base10_2(){
         let result=document.getElementById("result")
         let digito,pos=0,numeros=[],rr="",men=" "
         let vari = parseInt(result.value)
         if (vari>0){
            while(vari>0){
            digito=vari%2
            vari=Math.floor(vari/2)
            numeros[pos]= digito
            pos= pos+1
            }
            for(let h=pos-1; h>=0;h--){
            rr=rr+numeros[h].toString()
            }
            result.value=rr
         }
         else{
            result.value=men+"ingrese un valor numerico y mayor a cero ".toString()
         }
      }
      
      base10_16(){
         let result=document.getElementById("result")
         let c=1,hex=" ",cn=" "
         let num= parseInt(result.value)
         while(c>0){
            c=Math.floor(num/16)
            switch (num%16) {
              case 10:
                 hex="A"+hex
               break;
               case 11:
                  hex="B"+hex
               break;
               case 12:
                  hex="C"+hex
               break;
               case 13:
                  hex="D"+hex
               break;
                case 14:
                  hex="E"+hex
               break;
               case 15:
                  hex="F"+hex
               break;
               default:
                  hex=(num%16)+hex
               break;
            }
            num=c    
         } 
         cn=cn+hex.toString()
         result.value=cn
      }
      
      base10_8(){
         let result=document.getElementById("result")
         let c=1,oct=" "
         let rep="",men=" "
         let num=parseInt(result.value)
         if (num>0) {
            while(c>0){
               c=Math.floor(num/8)
               oct=(num%8)+oct.toString()
               num=c
            } 
            rep=rep+oct.toString()
            result.value=rep
         } 
         else {
            result.value=men+"ingrese un valor numerico y mayor a cero ".toString()
            
         }
         
         
      }
      
      base2_10(){
         let result= document.getElementById("result")
         let dec=0,c=0,ex=0,s=0,r="",x=0,p=0
         let num=parseInt(result.value)
         while(c<num){ 
            dec=num%10
            num=Math.floor(num/10)
            p=2**x
            ex=dec*p
            s=s+ex
            x=x+1
         }
         r=r+s.toString()
         result.value=r
         console.log(r)
      }
      
      base2_16(){
         let result= document.getElementById("result")
         let dec=0,c=0,ca=1,ex=0,s=0,r="",x=0,p=0,hex=" ",cn=" "
         let num=parseInt(result.value)
         while(c<num){ 
            dec=num%10
            num=Math.floor(num/10)
            p=2**x
            ex=dec*p
            s=s+ex
            x=x+1
         }
         r=r+s
         //console.log(r)
         while(ca>0){
            ca=Math.floor(r/16)
            switch (r%16) {
            case 10:
              hex="A"+hex
             break;
               case 11:
                  hex="B"+hex
               break;
               case 12:
                  hex="C"+hex
               break;
               case 13:
                  hex="D"+hex
               break;
                case 14:
                  hex="E"+hex
               break;
               case 15:
                  hex="F"+hex
               break;
               default:
                  hex=(r%16)+hex
               break;
            }
            r=ca  
         } 
         cn=cn+hex.toString()
         result.value=cn
         console.log(cn)
      }
      
      contar_palabra(){
         let result= document.getElementById("result")
         let c=1,i=0
         let tex=[]
         tex=result.value
         for(let i=0;i<tex.length-1; i++){
            if(tex[i]==" " && tex[i+1]!==" "){
               c=c+1
            }
         }
         result.value="La frase: "+tex+"; tiene "+c+" palabras"
      
      }
      
      palindroma(){
         let palabra1,palabra2="",comp=""
         let result=document.getElementById("result")
         palabra1=String(result.value)
         console.log(palabra1)
         for(let pos=palabra1.length-1;  pos>=0; pos--){
           if(palabra1[pos]!=" "){
             comp=palabra1[pos].toLowerCase()+comp
             palabra2=palabra2+palabra1[pos].toLowerCase()
           }
         }
         if(comp==palabra2){
           result.value= "La frase: '" +palabra1+ "', es Palindroma"
         }
         else{
           result.value="La frase: '" +palabra1+ "', no es Palindroma"
         }
       }
      
      invertir_frase(){
         let result= document.getElementById("result")
         let i=" ",inv=" "
         let pal =result.value
         for(let i=pal.length -1; i>=0 ;i--){
            inv +=pal[i]
         }
         result.value=inv
         console.log(inv)
      }
      
      contar_caracteres(){
         let result = document.getElementById("result")
         let palabra="",cont=0,cv=0,cc=0,cn=0,ce=0,co=0
         palabra=String(result.value)
         console.log(palabra)
         for(let pos=0;pos<palabra.length;pos++){
           // console.log(palabra[pos])
           if(palabra[pos]=="/"  || palabra[pos]=="%"  ||  palabra[pos]=="!"  || palabra[pos]=="@"  || palabra[pos]=="#"  || palabra[pos]=="$"  || palabra[pos]=="^"  
             ||  palabra[pos]=="&"  || palabra[pos]=="*" ||  palabra[pos]=="(" ||  palabra[pos]==")" ||  palabra[pos]=="-" ||  palabra[pos]=="_" ||  palabra[pos]=="+" 
             ||  palabra[pos]=="=" ||  palabra[pos]=="{" ||  palabra[pos]=="}" ||  palabra[pos]=="[" ||  palabra[pos]=="]" ||  palabra[pos]==":" ||  palabra[pos]==";" 
             ||  palabra[pos]=="'" ||  palabra[pos]=="," ||  palabra[pos]=="." ||  palabra[pos]=="?" ||  palabra[pos]=="`" ||  palabra[pos]=="<" ||  palabra[pos]==">"){
               cc=cc+1
               console.log("caracter"+cc)
             }else{  
               if(palabra[pos]=="1"  || palabra[pos]=="2"  ||  palabra[pos]=="3"  || palabra[pos]=="4"  || palabra[pos]=="5"  || palabra[pos]=="6"  || palabra[pos]=="7"  
               ||  palabra[pos]=="8"  || palabra[pos]=="9" ||  palabra[pos]=="0"){
               cn=cn+1
               console.log("numeros"+cn)
             }else{
               if(palabra[pos].toLowerCase()==" "){
                 ce=ce+1
                 console.log("espacios"+ce)
               }else{
                 if(palabra[pos].toLowerCase()=="a"|| palabra[pos].toLowerCase()=="e"||  palabra[pos].toLowerCase()=="i" 
                 || palabra[pos].toLowerCase()=="o"  ||  palabra[pos].toLowerCase()=="u"){ // CONVIERTE A MINUSCULA EL TXT
               cv=cv+1
               console.log("vocales"+cv)
               }else{
                 co=co+1
                 console.log("consonantes"+co)
               }
             }
             }
           } 
           result.value=`La frase "${palabra}" tiene: ${co} consonantes, ${cv} vocales, ${ce} espacios, ${cn} números y ${cc} caracteres"`
         }
      
      }

      buscar_cadena(){
         let result = document.getElementById("result")
         let palabra="",cc=0,cp="",arr=[]
         palabra=result.value
         let valorb= prompt("Ingrese el valor buscado")
         console.log(palabra)
         for(let pos=0;pos<palabra.length;pos++){
           console.log(palabra[pos])
           if(palabra[pos].toLocaleLowerCase()== valorb.toLocaleLowerCase()){
               cc=cc+1
               cp=cp+pos.toString()+","
               // console.log("arreglo"+cp)
           }
         }
          result.value=`Dentro del arreglo [${palabra}] el objeto ingresado ${valorb} se encuentra en la posición "${cp}"`
         console.log("arreglo"+cp)
      }

      mayor_arreglo(){
         let result=document.getElementById("result")
         let max=0,c=0
         let num=result.value
         let numt=num.split(";")
         for(c=0;c<numt.length;c++){
               if (max<numt[c]) {
                max=numt[c]
                  console.log(max)
               }
            }
         if(max!= parseInt(max)){
            result.value= "Ingrese un formato valido"
         }else{result.value="el numero mayor del arreglo ["+numt+"]:"+" es ->"+max} 
         
      }
      
      promedio_arreglo(){
         let result=document.getElementById("result")
         let sum=0 ,c=0,i=0
         let num=result.value
         let arr=num.split(";")
         let num1=0
         for(c=0 ;c<arr.length;c++){
          sum=sum+parseFloat(arr[c])
         }
         i = sum/arr.length
         if(i != parseFloat(i)){
          result.value= "INGRESE NUMEROS A PROMEDIAR"
         }else{result.value="El promedio del arreglo:"+ arr +"; es : " + i} 
      }

      buscar_arreglo(){
         let result=document.getElementById("result")
         let b=result.value
         let c=0,e=false
         let arr=b.split(";")
         let res=prompt("Ingrese el elemento que desea buscar:")
         while (c<arr.length && e==false) {
            if (arr[c]==res) {
            e=true
           }else{
             c++
            }
         }
         if (e==true) {
            result.value="En el arreglo ["+arr+"]"+" el elemento"+ res+"se encontro en la posicion:"+c
         }else{
            result.value="En el arreglo ["+arr+"]"+" no se encuentra el elemento."+ res
         }
      }

      eliminar_elemento(){
         let result=document.getElementById("result")
         let arr2="",i=0
         let a=result.value
         let arr=a.split(";")
         let tbs=prompt("Ingrese el valor a eliminar:")
         for(i=0;i<arr.length||i>arr.length;i++){
            if (arr[i] != tbs) {
               arr2+=arr[i]+";"
               result.value=arr2 
            }
            //console.log(arr2)
         }   
            
      }

      insertar_elemento(){
         let result=document.getElementById("result")
         let arr2=""
         let arreglo=result.value//CONTIENE MI INPUT{20;80}
         let arr=arreglo.split(";")//{20","80}
         let ninsertar=prompt("Ingrese el valor para insertar")
         let npos=prompt("Ingrese la posicion")
         for(let i=0;i<arr.length;i++){// recorre el arreglo
            if (i!=npos) {//comparar las posiciones 1 diferente 1
               arr2+=arr[i]+","// darle el valor del arreglo1 a mi arreglo2
               console.log(arr2)
            }else{//caso contrario osea son iguales
             arr2+=ninsertar+","+arr[i]// areglo nuevo = numero para insertar+ arreglo original en la posicion
             //que recorre el arreglo
             console.log(arr2)
            }
         }
           console.log(arr.length)
         if(npos>arr.length-1){
           result.value="LA POSICION QUE INGRESO NO FORMA PARTE DEL ARREGLO"   
         }else{
           result.value="EN EL ARREGLO ["+arr+"]"+" SE ELIMINO EL ELEMENTO ["+ ninsertar+"]"+" EL NUEVO ARREGLO ES ["+arr2+"]" 
         }
      }
      
   }
   let sgc = new calculadora()
 