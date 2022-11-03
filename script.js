
// degiskenler baslangic

let addButton = document.querySelector('#addBtn');

let inputLi = document.querySelector('#addText');

let myList = document.querySelector('#myList');

let allLiItems = document.querySelectorAll('.list-group-item');

let myListArr = Array.from(allLiItems);

let localget = localStorage.getItem('keylocal') ? JSON.parse(localStorage.getItem('localkey')) : []
// degiskenler bitis


// toast tanımlama baslangic
let toastTitles = document.querySelector('#toastTitle');
let toastMessages = document.querySelector('#toastMessage');
let toastBgDom = document.querySelector('#tost-Bg')

const toastLiveExample = document.getElementById('liveToast')

function toastfUNC(toastTitle,toastMessage,toastBg){

    const toast = new bootstrap.Toast(toastLiveExample)
    toastTitles.innerHTML = toastTitle;
    toastMessages.innerHTML = toastMessage;
    toastBgDom.className = toastBg;
    toast.show()
    
}
// toast tanımlama bitis


// yapıldı ve kaldırma fonksiyonlari baslangic
allLiItems.forEach(closeCall);

function closeCall(liItem) {
    let deletdiv = document.createElement('div');
    let deleteBtn = document.createElement('i')
    deletdiv.appendChild(deleteBtn)
    deleteBtn.className = 'fa-solid fa-xmark';
    deleteBtn.addEventListener('click', () => {
        deletdiv.parentElement.remove();
        toastfUNC("Tebrikler!","Listeden kaldırıldı!","bg-primary");
    });
    liItem.appendChild(deletdiv);
    liItem.addEventListener('click', () => {
    liItem.classList.toggle('checked');

    })

};

// yapıldı ve kaldırma fonksiyonlari bitis   
        
       


// yeni liste elemanı ekleme, boş liste elemanı ekleyememe fonksiyonu baslangic


addButton.addEventListener('click', addItem);

function addItem() {
    if (Number(inputLi.value) != '') {
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = inputLi.value;
        myList.appendChild(listItem);
        closeCall(listItem);
        inputLi.value = '';
        toastfUNC("İşte bu!","Listeye Eklendi","bg-success");
        myListArr.push(listItem);
        console.log(myListArr);
        localStorage.setItem('localkey', JSON.stringify(localget));
    } else {
        inputLi.value = '';
        toastfUNC("Upss","Bir şeyler yazmalısın!","bg-danger");           
    }
}
// yeni liste elemanı ekleme, boş liste ekleyememe fonksiyonu bitis

addButton.addEventListener('click', (e)=>{
    e.preventDefault();
})