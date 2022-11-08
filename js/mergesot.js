
async function merge(low, mid, high)
{
    var ele = document.querySelectorAll('.bar');
    var temp = [];
    
    var left = low, right = mid + 1;
    
    for (let i = low; i <= mid; ++i)
    {
        await (waitforme(delay));
        ele[i].style.background = 'orange';
    }
    for (let i = mid + 1; i <= high; ++i)
    {
        await (waitforme(delay));
        ele[i].style.background = 'yellow';
    }
    await (waitforme(delay));
    while (left <= mid && right <= high)
    {
        await (waitforme(delay));
        if (parseInt(ele[left].style.height) <= parseInt(ele[right].style.height))
            temp.push(ele[left++].style.height);
        else
            temp.push(ele[right++].style.height);
    }
    while (left <= mid)
    {
        await (waitforme(delay));
        temp.push(ele[left++].style.height);
    }                  
    while (right <= high)
    {
        await (waitforme(delay));
        temp.push(ele[right++].style.height);
    }
    var k = low;
    for (let i = 0; i < temp.length; ++i)
    {
        await (waitforme(delay));
        if(low==0 && high == ele.length-1)
            ele[k].style.background = 'green';
        else ele[k].style.background = "lightgreen" ; 
        ele[k++].style.height = temp[i];
    }
}

async function mergeSort(low , high)
{
    if (low >= high)
        return;
    var mid = parseInt((low + high) / 2);
    await mergeSort(low, mid);
    await mergeSort(mid + 1, high);
    await merge(low, mid, high);
}

const mergeSortBtn = document.querySelector("#mergeSort");
mergeSortBtn.addEventListener('click', async function () {
    var ele = document.querySelectorAll('.bar');
    
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await mergeSort(0,ele.length-1);
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
});