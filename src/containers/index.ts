import { connect } from 'react-redux'
import { map, assoc, prop } from 'ramda'
import { actions, selectors, DatesState } from '../store'
import App from '../components/App'
import findDateType from '../utils/find-date-type/find-date-type'

const mapStateToProps = (state: DatesState) => ({
    twoNextDates: map(
        (date) => assoc(
            'type',
            findDateType(prop('type', date), selectors.types(state)),
            date
        ),
        selectors.twoNextDates(state),
    ),
    loading: selectors.loading(state),
})

const mapDispatchToProps = {
    getDates: actions.getDates,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
