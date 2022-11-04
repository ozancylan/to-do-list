
// degiskenler baslangic

let addButton = document.querySelector('#addBtn');

let inputLi = document.querySelector('#addText');

let myList = document.querySelector('#myList');

let allLiItems = document.querySelectorAll('.list-group-item');



// degiskenler bitis


// toast tanımlama baslangic
let toastTitles = document.querySelector('#toastTitle');
let toastMessages = document.querySelector('#toastMessage');
let toastBgDom = document.querySelector('#tost-Bg')

const toastLiveExample = document.getElementById('liveToast')

function toastfUNC(toastTitle, toastMessage, toastBg) {

    const toast = new bootstrap.Toast(toastLiveExample)
    toastTitles.innerHTML = toastTitle;
    toastMessages.innerHTML = toastMessage;
    toastBgDom.className = toastBg;
    toast.show()

}
// toast tanımlama bitis

// localstorage değişkenini burada tanımladık
let taskList = [];

// yapıldı ve kaldırma fonksiyonlari baslangic
allLiItems.forEach(closeCall);

function closeCall(liItem) {
    let deletdiv = document.createElement('div');
    let deleteBtn = document.createElement('i')
    deletdiv.appendChild(deleteBtn)
    deleteBtn.className = 'fa-solid fa-xmark';
    deleteBtn.addEventListener('click', (index) => { // index parametresini kullanarak silme işleminin localstorage de de uygulanmasını sağlıyoruz
        deletdiv.parentElement.remove();

        let deleteIndex;
        for (let i in taskList) {
            if (taskList[i] == index) {
                deleteIndex = index;
            }
        }
        taskList.splice(deleteIndex, 1);
        // silme işlemi tamamlandıktan sonra güncel veriyi tekrar local storage'a yolluyoruz.
        localStorage.setItem("taskList", JSON.stringify(taskList));

        toastfUNC("Tebrikler!", "Listeden kaldırıldı!", "bg-primary");
    });
    liItem.appendChild(deletdiv);
    liItem.addEventListener('click', () => {
        liItem.classList.toggle('checked');

    })

};

// yapıldı ve kaldırma fonksiyonlari bitis   




// yeni liste elemanı ekleme, boş liste elemanı ekleyememe fonksiyonu baslangic


addButton.addEventListener('click', addItem);

function addItem(event) {
    if (Number(inputLi.value) != '') {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = inputLi.value;
        myList.appendChild(listItem);

        taskList.push(inputLi.value) //localsotrage için buradan aldığımız bilgiyi taskList e pushluyoruz
        
        closeCall(listItem);
        inputLi.value = '';

        localStorage.setItem("taskList", JSON.stringify(taskList)); // burada da set etme işlemini yapıyoruz

        toastfUNC("İşte bu!", "Listeye Eklendi", "bg-success");

    } else {
        inputLi.value = '';
        toastfUNC("Upss", "Bir şeyler yazmalısın!", "bg-danger");
    }
    event.preventDefault(); // uygulamanın sayfa yenilendiğinde sıfırlamasın engelledik
}
// yeni liste elemanı ekleme, boş liste ekleyememe fonksiyonu bitis

// localStorage listeye tanımlama başlangıç

function displayTask() {
    for (let task of taskList) {
      let listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = task;
      myList.appendChild(listItem);
      closeCall(listItem);
    }
  }
  // Local storage'dan gelen bilgiyi burada değişken olarak tanımladım.
  let saved = localStorage.getItem("taskList");
  //Local storage'da veri bulunuyorsa eğer bunu başka bir fonksiyona parametre olarak gönderip sayfamızda gösterebiliriz.
  if (saved) {
    taskList = JSON.parse(localStorage.getItem("taskList"));
    displayTask(taskList);
  }
  // localStorage listeye tanımlama bitiş
