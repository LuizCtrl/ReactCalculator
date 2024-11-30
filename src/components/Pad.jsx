import Button from "./Buttons";

const Pad = ({ display, setDisplay }) => {
    const calculatorKeys = [
        'AC', 'C', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='  
    ];

    const handleCLick = (button) => {
        const operators = ['/', '*', '+', '-'];
        if (button === 'AC') {
            setDisplay('');
        } else if (button === 'C') {
            setDisplay(display.slice(0, -1));
        } else if (button === '=') {
            try {
                let result = 0;
                result = display == "05/11" || "5/11" ? "Te amo Joy" : eval(display)
                result = result.toString().split('.')[1]?.length > 2 ? result.toFixed(2) : result
                setDisplay(result.toString());
            } catch (error) {
                setDisplay('Error');
            }
        } else if (button == '%') {
            setDisplay(parseFloat(display) / 100);
        } else if (operators.includes(button) && operators.includes(display[display.length - 1])) {
            return;
        } else {
            setDisplay(display + button);
        }
    } 

    return (
        <div className="grid grid-cols-4 gap-2 w-full">
            {calculatorKeys.map((key, index) => (
                <Button label={key} key={index} changeDisplay={handleCLick} />
            ))}
        </div>
    )
}

export default Pad;