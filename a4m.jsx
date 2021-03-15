function calculate() {
    document.getElementById('pM').innerHTML = pM()
    document.getElementById('aT').innerHTML = aT()
    document.getElementById('aT_oE').innerHTML = aT()
    document.getElementById('leverage').innerHTML = leverage()
    document.getElementById('roa').innerHTML = roa()
    document.getElementById('roe').innerHTML = roe()

    document.getElementById('roa_npat').innerHTML = roa_npat()
    document.getElementById('roa_ebit').innerHTML = roa_ebit()
    document.getElementById('roe_npat').innerHTML = roe_npat()
    document.getElementById('roe_ebit').innerHTML = roe_ebit()
    document.getElementById('pM_npat').innerHTML = pM()
    document.getElementById('pM_ebit').innerHTML = pM_ebit()

    document.getElementById('gross_margin').innerHTML = gross_margin()
}

let gross_margin = () => {
  return (parseFloat(document.getElementById('sales').value) - parseFloat(document.getElementById('cogs').value))  / document.getElementById('sales').value;
}

let aT = () => {
  return document.getElementById('sales').value / document.getElementById('assets').value;
}

let pM = () => {
    return document.getElementById('npat').value / document.getElementById('sales').value;
}

let leverage = () => {
    return document.getElementById('assets').value / document.getElementById('equity').value;
}

let roa = () => {
 return aT() * pM();
}

let roe = () => {
 return roa() * leverage();
}

let roa_npat = () => {
 return document.getElementById('npat').value / document.getElementById('assets').value;
}

let roa_ebit = () => {
 return document.getElementById('ebit').value / document.getElementById('assets').value;
}

let roe_npat = () => {
 return document.getElementById('npat').value / document.getElementById('equity').value;
}

let roe_ebit = () => {
 return document.getElementById('ebit').value / document.getElementById('equity').value;
}

let pM_ebit = () => {
 return document.getElementById('ebit').value / document.getElementById('sales').value;
}

function calc_ccc() {
    document.getElementById('nWC').innerHTML = nWC()
    document.getElementById('rT').innerHTML = rT()
    document.getElementById('iT').innerHTML = iT()
    document.getElementById('dInR').innerHTML = dInR()
    document.getElementById('dInI').innerHTML = dInI()
    document.getElementById('dInP').innerHTML = dInP()
    document.getElementById('ccc').innerHTML = ccc()
    document.getElementById('s$perI$').innerHTML = salePerInv()
    document.getElementById('aCR').innerHTML = additionalCashReq()
}

let nWC = () => {
    const currentAssets = parseFloat(document.getElementById('cA').value);
    const currentLiability = parseFloat(document.getElementById('cL').value)
    return currentAssets - currentLiability;
}

let rT = () => {
    const openingReceivables = parseFloat(document.getElementById('oR').value)
    const closingReceivables = parseFloat(document.getElementById('cR').value)
    const avgReceivables = (openingReceivables + closingReceivables) / 2;
    return document.getElementById('sales_ccc').value / avgReceivables;
}

let iT = () => {
    const openingInventory = parseFloat(document.getElementById('oI').value)
    const closingInventory = parseFloat(document.getElementById('cI').value)
    const avgInventory = (openingInventory + closingInventory) / 2;
    return document.getElementById('cogs_ccc').value / avgInventory;
}

let dInR = () => {
    const openingReceivables = parseFloat(document.getElementById('oR').value)
    const closingReceivables = parseFloat(document.getElementById('cR').value)
    const avgReceivables = (openingReceivables + closingReceivables) / 2;
    return avgReceivables / (document.getElementById('sales_ccc').value /365);
}

let dInI = () => {
    const openingInventory = parseFloat(document.getElementById('oI').value)
    const closingInventory = parseFloat(document.getElementById('cI').value)
    const avgInventory = (openingInventory + closingInventory) / 2;

    return avgInventory / (document.getElementById('cogs_ccc').value /365);
}

let dInP = () => {
    const openingPayable = parseFloat(document.getElementById('oP').value)
    const closingPayable = parseFloat(document.getElementById('cP').value)
    const avgPayable = (openingPayable + closingPayable) / 2;
    return (avgPayable / (document.getElementById('cogs_ccc').value / 365));
}

let salePerInv = () => {
    const openingInventory = parseFloat(document.getElementById('oI').value)
    const closingInventory = parseFloat(document.getElementById('cI').value)
    const avgInventory = (openingInventory + closingInventory) / 2;
    return document.getElementById('sales_ccc').value / avgInventory;
}

let ccc = () => {
    return Math.round(dInI()) + Math.round(dInR()) - Math.round(dInP())
}

let additionalCashReq = () => {
   return (ccc() / 365) * document.getElementById('planned_growth').value;
}

function operational_efficiency() {
    document.getElementById('fAT_oE').innerHTML = fixed_asset_turnover()
    document.getElementById('nwC_t').innerHTML = nwC_t()
}

let fixed_asset_turnover = () => {
    return document.getElementById('sales').value / document.getElementById('fixed_assets').value;
}

let nwC_t = () => {
    return document.getElementById('sales').value / nWC();
}

function liquidity_ratios() {
    document.getElementById('cRatio').innerHTML = current_ratio();
    document.getElementById('acid_test').innerHTML = acid_test();
    document.getElementById('cash_ratio').innerHTML = cash_ratio();
}

let current_ratio = () => {
    return document.getElementById('cA').value / document.getElementById('cL').value;
}

let acid_test = () => {
    return (parseFloat(document.getElementById('cA').value) - parseFloat(document.getElementById('inventory').value)) / document.getElementById('cL').value;
}

let cash_ratio = () => {
    const cash_eq = parseFloat(document.getElementById('cash').value) + parseFloat(document.getElementById('mSecurities').value|| 0)
    return cash_eq / document.getElementById('cL').value;
}


function capital_structure_ratios() {
    document.getElementById('d2A').innerHTML = d2A();
    document.getElementById('d2E').innerHTML = d2E();
    document.getElementById('b2A').innerHTML = b2A();
    document.getElementById('b2E').innerHTML = b2E();
}

let d2A = () => {
    return parseFloat(document.getElementById('total_liabilities').value) / document.getElementById('assets').value;
}

let d2E = () => {
    return parseFloat(document.getElementById('total_liabilities').value) / document.getElementById('total_equity').value;
}

let b2A = () => {
    return parseFloat(document.getElementById('borrowings').value) / document.getElementById('assets').value;
}

let b2E = () => {
    return parseFloat(document.getElementById('borrowings').value) / document.getElementById('total_equity').value;
}

function solvency_ratios() {
    document.getElementById('iCR').innerHTML = iCR();
    document.getElementById('cCR').innerHTML = cCR();
    document.getElementById('fcCr').innerHTML = fcCR();
}

let iCR = () => {
    return parseFloat(document.getElementById('ebit').value) / document.getElementById('interest_expense').value;
}

let cCR = () => {
    return (parseFloat(document.getElementById('cF_op').value) + parseFloat(document.getElementById('cIP').value)) / document.getElementById('interest_expense').value;
}

let fcCR = () => {
    return parseFloat(document.getElementById('ebitfc').value) / (parseFloat(document.getElementById('interest_expense').value) + parseFloat(document.getElementById('fC').value || 0));
}

function cashFlow_ratios() {
    document.getElementById('cFA').innerHTML = cFAdequacy();
    document.getElementById('iCC').innerHTML = investment_cash_coverage();
    document.getElementById('cPP_tL').innerHTML = cash_payback_period_TL();
    document.getElementById('cPP_iL').innerHTML = cash_payback_period_IL();
}

let cFAdequacy = () => {
    const op_expenses = parseFloat(document.getElementById('div').value) + parseFloat(document.getElementById('cash4Assets').value)
                        + parseFloat(document.getElementById('repayment_loans').value);
    return parseFloat(document.getElementById('nCF_o').value) / op_expenses;
}

let investment_cash_coverage = () => {
    return document.getElementById('cash4Assets').value / document.getElementById('nCF_o').value;
}

let cash_payback_period_TL = () => {
    return document.getElementById('tot_liabilities').value / document.getElementById('nCF_o').value;
}

let cash_payback_period_IL = () => {
    return document.getElementById('int_liabilities').value / document.getElementById('nCF_o').value;
}

function cashFlow_efficiency_ratios() {
    document.getElementById('cf2s').innerHTML = cashflow2Sales();
    document.getElementById('cOI').innerHTML = cont_op_index();
    document.getElementById('cRA').innerHTML = cashRetAssets();
    document.getElementById('cRE').innerHTML = cashRetEquity();
}

let cashflow2Sales = () => {
    return document.getElementById('Efficiency_nCF_o').value / document.getElementById('Efficiency_sales').value;
}

let cont_op_index = () => {
    return document.getElementById('Efficiency_nCF_o').value / document.getElementById('iCO').value;
}

let cashRetAssets = () => {
    return document.getElementById('Efficiency_nCF_o').value / document.getElementById('Efficiency_assets').value;
}

let cashRetEquity = () => {
    return document.getElementById('Efficiency_nCF_o').value / document.getElementById('Efficiency_equity').value;
}

function perShareRatios() {
    document.getElementById('eps').innerHTML = EPS();
    document.getElementById('eY').innerHTML = earning_yield();
    document.getElementById('pe').innerHTML = price2earning();
    document.getElementById('dY').innerHTML = dividends_yield();
    document.getElementById('cfPS').innerHTML = cashflowPerShare();
    document.getElementById('nAPS').innerHTML = netAssetsPerShare();
    document.getElementById('nTAPS').innerHTML = netTangibleAssetsPerShare();
}

let EPS = () => {
    return document.getElementById('npat_pS').value / document.getElementById('sO_pS').value;
}

let earning_yield = () => {
    return EPS() / document.getElementById('mPpS').value;
}

let price2earning = () => {
    return document.getElementById('mPpS').value / EPS();
}

let dividends_yield = () => {
    return document.getElementById('divPS').value / document.getElementById('mPpS').value;
}

let cashflowPerShare = () => {
    return document.getElementById('net_cashF_pS').value / document.getElementById('sO_pS').value;
}

let netAssetsPerShare = () => {
    return document.getElementById('equity_pS').value / document.getElementById('sO_pS').value;
}

let netTangibleAssetsPerShare = () => {
    const netAssets = (parseFloat(document.getElementById('equity_pS').value) - parseFloat(document.getElementById('iA_pS').value));
    return  netAssets / document.getElementById('sO_pS').value;
}

function sustainable_growth_rate() {
    document.getElementById('roa_sgr').innerHTML = roa_npat();
    document.getElementById('dpR').innerHTML = dividentPayoutRate();
    document.getElementById('remaining_profit').innerHTML = remaining();
    document.getElementById('eBya').innerHTML = EbyA();
    document.getElementById('sgr').innerHTML = SGR();
}

let dividentPayoutRate = () => {
    return document.getElementById('div_sgr').value / document.getElementById('npat').value
}

let remaining = () => {
    return 1 - dividentPayoutRate();
}

let EbyA = () => {
    return document.getElementById('equity').value / document.getElementById('assets').value;
}

let SGR = () => {
    const numerator = roa_npat() * remaining();
    return numerator / (EbyA() - numerator);
}