import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

function mapStoreToProps(store) {
  return {
    description: store.income.description,
    amount: store.income.amount,
    lineItems: store.income.LineItems
  };
};
export default connect(mapStoreToProps)(IncomeEntries);