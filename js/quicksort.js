async function partition(low , high)
{
    var ele = document.querySelectorAll('.bar');
    var i = low - 1;
    var pivot = high;
    ele[pivot].style.background = 'red';
    for (let j = low; j <= high - 1; ++j)
    {
        ele[j].style.background = 'yellow';
        await waitforme(delay);
        if (parseInt(ele[j].style.height) < parseInt(ele[pivot].style.height))
        {
            i++;
            swap(ele[j], ele[i]);
            ele[i].style.background = 'orange';
            ele[j].style.background = 'orange';
            await waitforme(delay);
        }
        else
            ele[j].style.background = 'pink';
    }
    i++; 
    await waitforme(delay);
    swap(ele[i], ele[high]);
    ele[high].style.background = 'pink';
    ele[i].style.background = 'green';

    for (let k = 0; k < ele.length; ++k)
    {
        if (ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(low, high)
{
    if (low >= high)
    {
        var ele = document.querySelectorAll('.bar');
        if (low >= 0 && high >= 0 && low < ele.length && high < ele.length)
        {
            ele[high].style.background = 'green';
            ele[low].style.background = 'green';
        }
        return;
    }
    var p = await partition(low, high);
    await quickSort(low, p - 1);
    await quickSort(p + 1, high);
}

const quickSortbtn = document.querySelector('#quickSort');
quickSortbtn.addEventListener('click', async function () {
    var ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    disableNewArrayBtn();
    disableSizeSlider();
    await quickSort(0,ele.length-1);
    enableSortingBtn();
    enableNewArrayBtn();
    enableSizeSlider();
}); 