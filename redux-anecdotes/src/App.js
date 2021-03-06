import React from 'react';

class App extends React.Component {
  
  addVote = (id) => () => {
    this.props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  addAnecdote = (event) => {
    event.preventDefault()
    const anec = event.target.anec.value
    this.props.store.dispatch({
      type: 'NEW_ANEC',
      data:{ content: anec }
    })
    event.target.anec.value = ''
  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.addVote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anec" /></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App