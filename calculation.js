window.onload = function() {

    // Declare all initiliation variables
    var keys         = document.getElementsByTagName('button'),
        operators    = ['/', '*', '-', '+', '%'],
        lastOperator = '',
        decimalAdded = false;
    
    // Loop all key
    for (var i = 0; i < keys.length; i++) {

        // Add click event listener to all key
        keys[i].onclick = function() {

            // Add initial variables
            var keyValue    = this.innerHTML,
                detail      = document.getElementById('detail'),
                detailValue = detail.innerHTML,
                lastChar    = detailValue[detailValue.length - 1],
                result      = document.getElementById('result-value');

            // Use switch case for different function of keys
            switch (keyValue) {
                // Case for clearing the calculator
                case 'C':
                    result.innerHTML = '0';
                    detail.innerHTML = '';
                    break;
                // Show the result for calculation
                case '=':
                    if (detail.innerHTML != '') {
                        result.innerHTML = eval(detailValue);
                        decimalAdded = false;
                    }
                    break;
                // Case for arithmatic operator
                case '/':
                case '*':
                case '-':
                case '+':
                case '%':
                    if (detailValue != '' && operators.indexOf(lastChar) == -1) {
                        detail.innerHTML += keyValue;
                    } else {
                        detail.innerHTML = detail.innerHTML.replace(/.$/, keyValue);
                    }

                    decimalAdded = false;
                    lastOperator = keyValue;
                    break;
                // Case for delete char
                case 'del':
                    if (lastChar == '.') {
                        decimalAdded = false;   
                    }

                    detail.innerHTML = detail.innerHTML.replace(/.$/, '');
                    break;
                // Case for add period
                case '.':
                    if ( ! decimalAdded) {
                        detail.innerHTML += keyValue;
                        decimalAdded = true;
                    }
                    break;
                