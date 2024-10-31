"use strict";

// if ga oid masalar
// 1-masala
{
  // 1-masala
  let a = 5;
  if (a > 0) {
    a++;
    console.log(a);
  } else {
    console.log(a);
  }
}
// 2-masala
{
  //2-masala

  let a = 2;
  if (a > 0) {
    a++;
    console.log(a);
  } else {
    a -= 2;
    console.log(a);
  }
}
// 3-masala
{
  //  3-masala

  let n = 1;
  if (n > 0) {
    n++;
    console.log(n);
  } else if (n === 0) {
    n = 10;
    console.log(n);
  } else {
    n -= 2;
    console.log(n);
  }
}
// 4-masala
{
  // 4-masala

  let a = 5;
  let b = -2;
  let c = 8;
  let count = 0;
  if (a > 0) {
    count++;
  }
  if (b > 0) {
    count++;
  }
  if (c > 0) {
    count++;
  }
  console.log(count);
}
// 5-masala
{
  //5-masala
  let a = 5;
  let b = 2;
  let c = 8;
  let pos = 0;
  let neg = 0;
  if (a > 0) {
    pos++;
  }
  if (b > 0) {
    pos++;
  }
  if (c > 0) {
    pos++;
  }
  if (a < 0) {
    neg++;
  }
  if (b < 0) {
    neg++;
  }
  if (c < 0) {
    neg++;
  }
  console.log(`musbat sonlar soni ${pos}, manfiy sonlar soni ${neg}`);
}
// 6-masala
{
  //6-masala
  let a = 1;
  let b = 2;
  if (a > b) {
    console.log(`${a} soni ${b} sonidan katta`);
  } else {
    console.log(`${b} soni ${a} sonidan katta`);
  }
}
// 7-masala
{
  //7-masala
  let a = 5;
  let b = 2;
  let pl = 0;
  if (a < b) {
    pl++;
    console.log(`${pl}-chi joylashgan son kichik`);
  } else {
    pl += 2;
    console.log(`${pl}-chi joylashgan son kichik`);
  }
}
// 8-masala
{
  //8-masala
  let a = 5;
  let b = 9;
  if (a < b) {
    console.log(`${a} soni kichik ${b} soni katta`);
    
  } else {
    console.log(`${b} soni kichik ${a} soni katta`);
  }
}
// 9-masala
{
  //9-masala
  let a = 12;
  let b = 15;
  if (a < b) {
    b +=100
    a++
    console.log(`${a} va ${b}`);
  } else {
    b +=100

    console.log(`${a} va ${b}`);
  }
}
//10-masala
{
  //10-masala
  let a = 15;
  let b = 15;
  let sum = 0;
  if (a !== b) {
    sum = a + b;
    a=sum
    b=sum
    console.log(a + " va " + b);
  }else{
    a = 0
    b = 0
    console.log(a + " va " + b);

  }
}

//Switch ga doir masalar
// 1-masala
{
    let a = 5;
    switch (a) {
        case 1:
            console.log("Dushanba");
            break;
        case 2:
            console.log("Seshanba");
            break;
        case 3:
            console.log("Chorshanba");
            break;
        case 4:
            console.log("Payshanba");
            break;
        case 5:
            console.log("Juma");
            break;
        case 6:
            console.log("Shanba");
            break;
        case 7:
            console.log("Yakshanba");
            break;    
        default:
            console.log("Bunday hafta kuni yo'q");        
    }
}
// 2-masala
{
    let k = 5
    switch (k) {
        case 1:
            console.log("Yomon");
            break;
        case 2:
            console.log("Qoniqarsiz");
            break;
        case 3:
            console.log("Qoniqarli");
            break;
        case 4:
            console.log("Yaxshi");
            break;
        case 5:
            console.log("A'lo");
            break;
      default:
            console.log("Xato");
    }   
}
// 3-masala
{
    let k = 5
    switch (k) {
        case 1:
        case 2:
        case 12:
            console.log("Qish");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Bahor");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Yoz");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Kuz");
            break;
    
    }
}
// 4-masala
{
    let k = 5
    switch (k) {
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30-kulik oy");
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            console.log("31-kulik oy");
            break;
        case 2:
            console.log("28-kulik oy (29-kulik oy kabisa yillarda)");
            break;
    
    }
}
// 5-masala
{
    let a = 10
    let b = 2
    let c = 1
    switch (c) {
        case 1:
            console.log(a + b);
            break;
        case 2:
            console.log(a - b);
            break;
        case 3:
            console.log(a * b);
            break;
        case 4:
            console.log(a / b);
            break;
    
    }
}
// 6-masala
{
    let l = 4
    let a = 5
    switch (l) {
        case 1:

            console.log(`Kesma uzunligi ${(a*10)/100}m`);
            break;
        case 2:
            console.log(`Kesma uzunligi ${a/1000}m`);
            break;
        case 3:
            console.log(`Kesma uzunligi ${a}m`);
            break;
        case 4:
            console.log(`Kesma uzunligi ${(a*1000)/100000}m`);
            break;
        case 5:
            console.log(`Kesma uzunligi ${(a*100)/1000}m`);
            break;
    }
}
// 7-masala
{
    let l = 4
    let a = 5
    switch (l) {
        case 1:

            console.log(`jism og'irligi ${a}kg`);
            break;
        case 2:
            console.log(`jism og'irligi ${a/1_000_000}kg`);
            break;
        case 3:
            console.log(`jism og'irligi ${a/1000}kg`);
            break;
        case 4:
            console.log(`jism og'irligi ${(a*1000)}kg`);
            break;
        case 5:
            console.log(`jism og'irligi ${(a*100)}kg`);
            break;
    }
}
// 8-masala
{
    let k = 5
    let m = 5
    switch (m){
        case 1:
            console.log(`${k}-yanvar`);
            break;
        case 2:
            console.log(`${k}-fevral`);
            break;
        case 3:
            console.log(`${k}-mart`);
            break;
        case 4:
            console.log(`${k}-aprel`);
            break;
        case 5:
            console.log(`${k}-may`);
            break;
        case 6:
            console.log(`${k}-iyun`);
            break;
        case 7:
            console.log(`${k}-iyul`);
            break;
        case 8:
            console.log(`${k}-avgust`);
            break;
        case 9:
            console.log(`${k}-sentabr`);
            break;
        case 10:            
            console.log(`${k}-oktyabr`);
            break;
        case 11:
            console.log(`${k}-noyabr`);
            break;
        case 12:
            console.log(`${k}-dushanba`);
            break;  
        default:
            console.log("Bir yilda faqat 12 oy bor");
    }

}
// 9-masala
{
    let k = 5
    let m = 5
    switch (m){
        case 1:
            k++
            console.log(`${k}-yanvar`);
            break;
        case 2:
            k++
            console.log(`${k}-fevral`);            
            break;
        case 3:
            k++
            console.log(`${k}-mart`);
            break;
        case 4:
            k++
            console.log(`${k}-aprel`);
            break;
        case 5:
            k++
            console.log(`${k}-may`);
            break;
        case 6:
            k++
            console.log(`${k}-iyun`);
            break;
        case 7:
            k++
            console.log(`${k}-iyul`);            
            break;
        case 8:
            k++
            console.log(`${k}-avgust`);
            break;
        case 9:
            k++
            console.log(`${k}-sentabr`);
            break;
        case 10:
            k++            
            console.log(`${k}-oktyabr`);
            break;
        case 11:
            k++
            console.log(`${k}-noyabr`);
            break;
        case 12:
            k++
            console.log(`${k}-dushanba`);
            break;  
        default:
            console.log("Bir yilda faqat 12 oy bor");
    }   
}
// 10-masala
{
    let y = "q"
    switch (y) {
        case "s":
            y = "shimol"
            break;
        case "j":
            y = "janub"
            break;
        case "q":
            y = "sharq"
            break;
        case "g":
            y = "g'arb"
            break;
    }


    let k = 2
    switch (k){
        case 0:
            console.log(`${y}ga harakatni davom ettir`);
            break;
        case 1:
            console.log(`${y}dan chapga buril`);
            break;
        case 2:
            console.log(`${y}dan o'ngga buril`);
            break;
    } 
}