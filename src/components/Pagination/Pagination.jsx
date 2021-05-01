import React from 'react';
import './Pagination.css';

const Pagination = ({ setCurrPage, currPage, lastPage }) => {
  const nextPage = () => {
    if (currPage < lastPage) {
      const nextPage = currPage + 1;
      setCurrPage(nextPage);

      const currentFocused = document.getElementById('pn__button--focused');;

      currentFocused.classList.remove('pn__button--focused');
      currentFocused.classList.add('pn__button--default');
      currentFocused.removeAttribute('id');
      const buttons = document.querySelectorAll('.pn__button');
      let newFocused;
      for (let button of buttons) {
        if (button.innerText == nextPage) {
          newFocused = button;
        }
      }
      newFocused.id = 'pn__button--focused';
      newFocused.classList.add('pn__button--focused');
      newFocused.classList.remove('pn__button--default');
    }
  }
  const prevPage = () => {
    if (currPage > 1) {
      const prevPage = currPage - 1;
      setCurrPage(currPage - 1);

      const currentFocused = document.getElementById('pn__button--focused');
      currentFocused.removeAttribute('id');
      currentFocused.classList.remove('pn__button--focused');
      currentFocused.classList.add('pn__button--default');
      const buttons = document.querySelectorAll('.pn__button');
      let newFocused;
      for (let button of buttons) {
        if (button.innerText == prevPage) {
          newFocused = button;
        }
      }
      newFocused.classList.add('pn__button--focused');
      newFocused.classList.remove('pn__button--default');
      newFocused.id = 'pn__button--focused';
    }
  }

  const leapPage = (e) => {
    const currentFocused = document.getElementById('pn__button--focused').closest('.pn__button');
    currentFocused.removeAttribute('id');
    currentFocused.classList.remove('pn__button--focused');
    currentFocused.classList.add('pn__button--default');
    const newFocused = e.target.closest('.pn__button');
    newFocused.classList.add('pn__button--focused');
    newFocused.classList.remove('pn__button--default');
    newFocused.id = 'pn__button--focused';
    setCurrPage(parseInt(e.target.innerText));
  }

  const renderNumberButtons = () => {
    let result = [];
    let isFirstPageButtonRendered = false;
    let isLastPageButtonRendered = false;
    for (let i = currPage - 2; i <= currPage + 2; i++) {
      if (i > 0 && i < lastPage) {
        if (i === currPage) {
          result.push(
            <div className="pn__button pn__button--focused" id="pn__button--focused" onClick={(e) => leapPage(e)} key={i}>
              <span className="pn__button-number">{i}</span>
            </div>
          );
        } else {
          result.push(
            <div className="pn__button pn__button--default" onClick={(e) => leapPage(e)} key={i}>
              <span className="pn__button-number">{i}</span>
            </div>
          );
        }
        if (i === 1) {
          isFirstPageButtonRendered = true;
        }
        if (i === lastPage) {
          isLastPageButtonRendered = true;
        }
      }
    }
    if (currPage - 3 > 1) {
      result.unshift(
        <div className="pn__button" key="firstDot">
          <span className="pn__button-number">...</span>
        </div>
      );
    }
    if (!isFirstPageButtonRendered) {
      if (currPage === 1) {
        result.unshift(
          <div className="pn__button pn__button--focused" id="pn__button--focused" key="1" onClick={(e) => leapPage(e)}>
            <span className="pn__button-number">1</span>
          </div>
        );
      } else {
        result.unshift(
          <div className="pn__button pn__button--default" key="1" onClick={(e) => leapPage(e)}>
            <span className="pn__button-number">1</span>
          </div>
        );
      }
    }
    if (currPage + 3 < lastPage) {
      result.push(
        <div className="pn__button" key="lastDot">
          <span className="pn__button-number">...</span>
        </div>
      );
    }

    if (!isLastPageButtonRendered && lastPage !== 1) {
      result.push(
        <div className="pn__button pn__button--default" key={lastPage} onClick={(e) => leapPage(e)}>
          <span className="pn__button-number">{lastPage}</span>
        </div>
      );
    }
    return result;
  }
  return (
    <div className="pn">
      <div className={currPage === 1 ? "pn__button pn__button--disabled pn__button--arrow" : "pn__button pn__button--default pn__button--arrow"} onClick={prevPage} >
        <svg className="pn__chevron pn__chevron--left" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6731 23.9997C11.35 23.9985 11.0304 23.932 10.7336 23.8042C10.4368 23.6764 10.1688 23.4899 9.94587 23.256L0.685768 13.6601C0.246209 13.2116 0 12.6087 0 11.9808C0 11.3528 0.246209 10.7499 0.685768 10.3015L10.2817 0.705523C10.5054 0.481845 10.7709 0.304414 11.0632 0.18336C11.3554 0.0623063 11.6687 4.71367e-09 11.985 0C12.3013 -4.71366e-09 12.6146 0.0623063 12.9068 0.18336C13.1991 0.304414 13.4646 0.481845 13.6883 0.705523C13.912 0.929201 14.0894 1.19475 14.2105 1.487C14.3315 1.77925 14.3938 2.09248 14.3938 2.4088C14.3938 2.72513 14.3315 3.03837 14.2105 3.33062C14.0894 3.62287 13.912 3.88841 13.6883 4.11209L5.77162 12.0048L13.4004 19.9214C13.8472 20.3709 14.098 20.9789 14.098 21.6127C14.098 22.2465 13.8472 22.8545 13.4004 23.304C13.1734 23.5292 12.9037 23.7068 12.607 23.8263C12.3104 23.9458 11.9929 24.0047 11.6731 23.9997Z" />
        </svg>
      </div>
      <div className="pn__number-container">
        {renderNumberButtons()}
      </div>
      <div className={currPage === lastPage ? "pn__button pn__button--disabled pn__button--arrow" : "pn__button pn__button--default pn__button--arrow"} onClick={nextPage} >
        <svg className="pn__chevron pn__chevron--right" viewBox="0 0 15 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.4101 24C2.09475 24.0018 1.78213 23.9413 1.49018 23.8221C1.19824 23.7028 0.932697 23.5271 0.708795 23.3051C0.484202 23.0823 0.305938 22.8173 0.184286 22.5253C0.0626333 22.2333 0 21.9201 0 21.6038C0 21.2874 0.0626333 20.9742 0.184286 20.6822C0.305938 20.3902 0.484202 20.1252 0.708795 19.9024L8.64025 12.0189L1.0203 4.08745C0.574006 3.63849 0.323503 3.03117 0.323503 2.39812C0.323503 1.76508 0.574006 1.15775 1.0203 0.708795C1.24306 0.484202 1.50808 0.305937 1.80009 0.184285C2.09209 0.0626322 2.40528 0 2.72161 0C3.03794 0 3.35114 0.0626322 3.64314 0.184285C3.93514 0.305937 4.20016 0.484202 4.42292 0.708795L13.6723 10.2936C14.1113 10.7416 14.3573 11.3438 14.3573 11.971C14.3573 12.5982 14.1113 13.2004 13.6723 13.6483L4.08745 23.2332C3.87237 23.4654 3.6134 23.6528 3.3255 23.7844C3.0376 23.916 2.72648 23.9893 2.4101 24Z" />
        </svg>
      </div>
    </div>
  );
}

export default Pagination;