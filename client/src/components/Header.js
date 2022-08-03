const Header = () => {
    return (
        <div className="row">
            <div class="col-sm">
            {/* <Form.Control type="text" placeholder="Search" onChange={(e) => {
              setQuery(e.target.value)
              }
              } /> */}
              <input type="text" className="form-control" placeholder="Search ..."></input>
              </div>
              <div class="col-sm">
            <button type="button" className="btn btn-warning">
              <svg width="15px" height="15px">
                      <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                  </svg>
              </button>
              </div>
        </div>
    )
}

export default Header