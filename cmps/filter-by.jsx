export class FilterBy extends React.Component{
    state={

        nameFilter:'',
        maxPrice:'',
        minPrice:''
    }

    setFilter=(ev)=>{
        const {onSetFilter}=this.props
        const field=ev.target.name
        // console.log(field);
        this.setState({[field]:ev.target.value},()=>onSetFilter(this.state))
    }
    render(){
        let {nameFilter,maxPrice,minPrice}=this.state
        return <section>
            <label htmlFor="filter-book-name">Filter by name :</label>
            <input type="text" id="filter-book-name" name="nameFilter" value={nameFilter} onChange={this.setFilter}/>
            <label htmlFor="filter-book-max-price">Filter by max price :</label>
            <input type="number" id="filter-book-max-price" name="maxPrice" value={maxPrice} onChange={this.setFilter}/>
            <label htmlFor="filter-book-min-price">Filter by min price :</label>
            <input type="number" id="filter-book-min-price" name="minPrice" value={minPrice} onChange={this.setFilter}/>
        </section>
    }
}