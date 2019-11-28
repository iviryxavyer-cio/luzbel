/**
 * @author JesusAlberto Briseño Camacho <jabc55@live.com>
 * @date 26/11/2019
 * @fileoverview Formulario de los conectores
 * @version 1.0.0
 * 
 */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Col, ButtonToolbar, Button } from 'react-bootstrap';

class CardComponent extends React.Component {
  constructor(props){
    super(props)

    if(props.datos) {
      this.props.initialize({

      })
    }
  }
  render() {
    return (
        <Col sm={6}>
            <Card className="TituloCard">
                <CardContent>
                    <Typography className="TituloCard" gutterBottom>
                        Job id: 1
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Progress: <span>0.00 %</span>
                    </Typography>
                    <Typography variant="body2" className="bodyCard" component="p">
                      External Id: job_1353136146286_0005
                        http://hadoop.cluster.com:8088/proxy/application_1353136146286_0004/
                    
                      Creation date: 2012-12-23 13:21:45 PST<br/>
                      Last update date: 2012-12-23 13:21:56 PST
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Detalles</Button>
                    <span>•</span><span>RUNNING</span>
                </CardActions>
            </Card>
        </Col>
    );
  }
}

export default CardComponent;