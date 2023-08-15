import './ExpenseDate.css';
function ExpenseDate(props) {
    const month_ = props.date.toLocaleString('en-US', {month : 'long'});
    const day_ = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year_ = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month_}</div>
            <div className="expense-date__year">{year_}</div>
            <div className="expense-date__day">{day_}</div>
            
        </div>
    );
}
export default ExpenseDate;