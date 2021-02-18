function calculate() {
            document.getElementById('pM').innerHTML = pM()
            document.getElementById('aT').innerHTML = aT()
            document.getElementById('leverage').innerHTML = leverage()
            document.getElementById('roa').innerHTML = roa()
            document.getElementById('roe').innerHTML = roe()

            document.getElementById('roa_npat').innerHTML = roa_npat()
            document.getElementById('roa_ebit').innerHTML = roa_ebit()
            document.getElementById('roe_npat').innerHTML = roe_npat()
            document.getElementById('roe_ebit').innerHTML = roe_ebit()
            document.getElementById('pM_npat').innerHTML = pM()
            document.getElementById('pM_ebit').innerHTML = pM_ebit()
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