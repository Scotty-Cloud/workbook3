// return gross pay and returns social security tax
// SS tax = 6.2%

function getSocSecTax(grossPay) {
  return grossPay * 0.062;
}

// medicare accepts gross pay and returns medicare tax
// medicare tax = 1.45%

function getMedicareTax(grossPay) {
  return grossPay * 0.0145;
}

// federal tax takes gross pay and withholding code
// returns the federal tax withholding

function getFederalTax(grossPay, withHoldingCode) {
    let taxRate = 0;

    if (withHoldingCode === 0){
        taxRate = 0.23;
    }else if (withHoldingCode >= 4) {
        taxRate = 0.18;
        if (withHoldingCode > 4) {
            taxRate -= (withHoldingCode - 4) * 0.005;
        }
    }else {
        if (withHoldingCode === 1) {
            taxRate = 0.195;
        }else if (withHoldingCode === 2) {
            taxRate = 0.21;
        }else if (withHoldingCode === 3) {
            taxRate = 0.23
        }
    }
    return grossPay * taxRate;
}

