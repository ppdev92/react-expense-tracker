import s from "./style.module.css";

import { useSelector } from "react-redux";

export function ExpenseTotal(props) {
	const expenseList = useSelector((store) => store.EXPENSE.expenseList);
	const totalExpense = expenseList.reduce((prevValue, currentValue) => {
		return prevValue + currentValue.price;
	}, 0);

	const IncomeInput = useSelector((store) => store.INCOME.income);

	return (
		<div>
			<div className='row'>
				<div className={`col ${s.label}`}>Total expenses</div>
				<div className={`col ${s.amount}`}>${totalExpense}</div>
			</div>
			<div className='row'>
				<div className={`col ${s.label}`}>Remaining money</div>
				<div className={`col ${s.amount}`}>
					${(IncomeInput - totalExpense).toFixed(2)}
				</div>
			</div>
		</div>
	);
}
