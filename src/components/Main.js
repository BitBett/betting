import React, {Component} from 'react';

class Main extends Component {

	render() {
		return (
		<div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{maxWidht :'500px'}}>
              <div className="content mr-auto ml-auto">
                { this.props.posts.map((post, key) => {
                  return (
                    <div className="card mb-4" key={key} >
                      <div className="card header">
                        <small className="text-muted">{post.author}</small>
                      </div>
                      <ul id="postList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p>{post.content}</p>
                        </li>
                        <li key={key} className="list-group-item py-2">
                          <small className="float-left mt-1 text-muted">
                            TIPS : {window.web3.utils.fromWei(post.tipAmount.toString())} eth
                          </small>
                          <button className="btn btn-link btn-sm float-right pt-0">
                          <span>
                            TIP 0.1 ETH
                          </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    )
                })}
              </div>
            </main>
          </div>
        </div>
		);
	}
}

export default Main;