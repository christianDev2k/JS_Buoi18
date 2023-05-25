const numInput = document.querySelector('#inputNum');
const addNumBtn = document.querySelector('#addNumBtn');
const showArr = document.querySelector('#showArr');
const showResult = document.querySelector('#result');
const optionList = document.getElementsByName('option');
const resultBtn = document.querySelector('#resultBtn');
const arr = [];

function checkInvalid(num) {
    return isNaN(num) || num === '' ? false : true;
}

function addArray(num) {
    arr.push(num)
    numInput.value = '';
}

function showArray() {
    let lastItem = arr.slice(-1);
    showArr.innerHTML += lastItem + ' ';
}

function checkedOption() {
    let seclectedOption;
    optionList.forEach(function (item) {
        item.checked ? seclectedOption = item.value : null;
    })
    return seclectedOption;
}

function showResultFunc(result) {
    showResult.innerHTML = `Kết quả là ${result}`;
}

function sumInt() {
    return arr.reduce(function (acc, num) {
        return num > 0 ? acc + parseFloat(num) : acc;
    }, 0);
}

function countPositive() {
    return arr.reduce(function (acc, num) {
        return Number(num) > 0 ? acc + 1 : acc;
    }, 0);
}

function findMin() {
    return arr.reduce(function (acc, num) {
        return Number(num) < Number(acc) ? acc = num : acc;
    }, arr[0]);
}

function findIntMin() {
    return arr.reduce(function (acc, num) {
        return Number(num) < Number(acc) & Number(num) > 0 ? acc = num : acc;
    }, Infinity);
}

function findEvenNumLast() {
    return arr.reduce(function (acc, num) {
        return num % 2 === 0 ? acc = num : acc;
    }, -1);
}

function sortAscending() {
    return arr.sort((a, b) => a - b);
}

function firstPrime() {
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime && arr[i] > 1) {
            return arr[i];
        }
    }
    return -1;
}

function countInteger() {
    return arr.reduce(function (acc, num) {
        return num % 1 === 0 ? acc + 1 : acc;
    }, 0);
}

function PosNevCompare() {
    let pos = arr.reduce(function (acc, num) {
        return num > 0 ? acc + 1 : acc;
    }, 0);
    let nev = arr.reduce(function (acc, num) {
        return num < 0 ? acc + 1 : acc;
    }, 0);
    return pos > nev ? `số dương nhiều hơn ${pos} > ${nev}` : `số âm nhiều hơn ${nev} > ${pos}`
}

function changePos() {
    const indexFirst = document.querySelector('#changePos1').value;
    const indexSecond = document.querySelector('#changePos2').value;

    if (indexFirst >= arr.length || indexSecond >= arr.length) {
        alert('Nhập sai thông tin vị trí bấy bì ơi!');
        return arr;
    }
    else {
        let temp = arr[indexFirst];
        arr[indexFirst] = arr[indexSecond];
        arr[indexSecond] = temp;
        return arr;
    }

}

addNumBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (checkInvalid(numInput.value)) {
        addArray(numInput.value);
        showArray();
    }
    else {
        alert('Nhập sai rồi bấy bì ơi!');
    }
})

resultBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Tìm option
    let seclectedOption = checkedOption();

    // Tính toán
    let result;
    result = seclectedOption === 'sumInt' ? sumInt() :
        seclectedOption === 'countPositive' ? countPositive() :
            seclectedOption === 'numMin' ? findMin() :
                seclectedOption === 'intMin' ? findIntMin() :
                    seclectedOption === 'evenNumLast' ? findEvenNumLast() :
                        seclectedOption === 'sortAscending' ? sortAscending() :
                            seclectedOption === 'primeNum' ? firstPrime() :
                                seclectedOption === 'countInteger' ? countInteger() :
                                    seclectedOption === 'posNev' ? PosNevCompare() : changePos();
    // Show ra kết quả
    showResultFunc(result);
})
