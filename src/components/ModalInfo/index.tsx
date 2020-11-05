import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// -- styles
import './styles.scss';

interface OwnProps {
  active?: boolean,
  mensagem?: boolean,
  sucess?: boolean,
}

type Props = Partial<OwnProps>;

function ModalInfo(props: Props) {
  const { active, sucess, mensagem } = props;
  if (active) {
    return (
      <div className="containerModalInfo">
        <div className="boxModal">
          <div className="icon">
            {sucess ? (
              <FontAwesomeIcon
                icon={faCheckCircle}
                color="#2db551"
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimesCircle}
                color="#b52d38"
              />
            ) }
          </div>
          <p className="info">
            {mensagem}
          </p>
        </div>
      </div>
    );
  }
  return (<></>);
}

export default ModalInfo;
