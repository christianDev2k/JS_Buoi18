/**
* Input:
* Lấy dữ liệu từ người dùng.
* Mảng arr chứa dữ liệu được nhập
*/
/**
* Process:
* Hàm checkInvalid: Kiểm tra tính hợp lệ của giá trị số nhập vào.
* Hàm addArray: Thêm giá trị số vào mảng arr.
* Hàm checkedOption: Lựa chọn tùy chọn từ danh sách các tùy chọn.
* Hàm sumInt: Tính tổng các số nguyên trong mảng.
* Hàm countPositive: Đếm số lượng số dương trong mảng.
* Hàm findMin: Tìm số nhỏ nhất trong mảng.
* Hàm findIntMin: Tìm số nguyên dương nhỏ nhất trong mảng.
* Hàm findEvenNumLast: Tìm số chẵn cuối cùng trong mảng.
* Hàm sortAscending: Sắp xếp mảng theo thứ tự tăng dần.
* Hàm firstPrime: Tìm số nguyên tố đầu tiên trong mảng.
* Hàm countInteger: Đếm số lượng số nguyên trong mảng.
* Hàm PosNevCompare: So sánh số dương và số âm trong mảng.
* Hàm changePos: Đổi vị trí hai số trong mảng.
* Hàm/
/**
* Output:
* Hàm showArray: Hiển thị mảng arr.
* Hàm showResultFunc: Hiển thị kết quả tính toán.
* Hàm alert: Hiển thị thông báo cho người dùng.
*/
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
    //  duyệt qua từng phần tử arr[i]
    for (let i = 0; i < arr.length; i++) {
        // Flagger
        let isPrime = true;
        // kiểm tra từng số từ 2 đến arr[i] - 1
        for (let j = 2; j < arr[i]; j++) {
            // nếu arr[i] chia hết cho j thì nó không phải số nguyên tố. Thoát vòng lặp kiểm tra tiếp arr[i + 1];
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }

        // Nếu flagger = true và lớn hơn 1 thì nó chính là số nguyên tố.
        if (isPrime && arr[i] > 1 && arr[i] % 1 === 0) {
            return arr[i];
        }
    }
    // Không thấy thì trả về -1 như yêu cầu đề bài
    return -1;
}

function countInteger() {
    return arr.reduce(function (acc, num) {
        return num % 1 === 0 ? acc + 1 : acc;
    }, 0);
}

function PosNevCompare() {
    // tính số lượng các số dương trong mảng
    let pos = arr.reduce(function (acc, num) {
        return num > 0 ? acc + 1 : acc;
    }, 0);

    // tính số lượng các số âm trong mảng 
    let nev = arr.reduce(function (acc, num) {
        return num < 0 ? acc + 1 : acc;
    }, 0);
    return pos > nev ? `số dương nhiều hơn ${pos} > ${nev}` : `số âm nhiều hơn ${nev} > ${pos}`
}

function changePos() {
    // Lấy giá trị của hai vị trí từ các phần tử HTML có ID changePos1 và changePos2.
    const indexFirst = document.querySelector('#changePos1').value;
    const indexSecond = document.querySelector('#changePos2').value;

    // Kiểm tra xem vị trí nhập vào có hợp lệ hay không
    if (indexFirst >= arr.length || indexSecond >= arr.length) {
        alert('Nhập sai thông tin vị trí bấy bì ơi!');
        return arr;
    }
    else {
        // Thực hiện việc hoán đổi giá trị giữa hai vị trí đó trong mảng arr.
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
    if (arr.length > 0) {
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
    }
    else {
        alert('Array no value babe!');
    }
})
