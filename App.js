//Symulacja modułów 

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", price: '10', active: true },
      { id: 2, name: "pierniczki", price: '10', active: false },
      { id: 3, name: "ciasto marchewkowe", price: '10', active: false },
      { id: 4, name: "cukinia", price: '10', active: false },
      { id: 5, name: "ciasto dyniowe", price: '10', active: false },
      { id: 6, name: "muffikni", price: '10', active: true },
    ]
  }

  handleChangeStatus = (id) => {
    
    const items = this.state.items.map(item => {
      if(id === item.id){
        item.active = !item.active
      }
      return item
    })

    this.setState({
      //możemy zapisać po prostu items - ona podmienia to stare items
      items: items
    })
  }

  render() {
    return (
      <>
        <Header items={this.state.items}/>
        <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
      </>
    );
  }
}
