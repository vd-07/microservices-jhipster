import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './dealer.reducer';

export const DealerDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const dealerEntity = useAppSelector(state => state.gateway.dealer.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="dealerDetailsHeading">Dealer</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{dealerEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{dealerEntity.name}</dd>
          <dt>
            <span id="address">Address</span>
          </dt>
          <dd>{dealerEntity.address}</dd>
        </dl>
        <Button tag={Link} to="/dealer" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/dealer/${dealerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DealerDetail;
