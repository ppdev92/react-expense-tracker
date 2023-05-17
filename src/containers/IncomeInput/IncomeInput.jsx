import s from "./style.module.css";
import { setIncome } from "store/income/income-slice";
import { useDispatch, useSelector } from "react-redux";


export function IncomeInput(props) {
  const dispatch = useDispatch();
  
  const income = useSelector((store) => store.INCOME.income)

  function setIncomeInput(e) {
    dispatch(setIncome(Number.parseFloat(e.target.value)))
  }


  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input defaultValue={income} onChange={setIncomeInput} type="number" className="form-control" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
