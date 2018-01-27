import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
class Home extends Component {

    state = {
        modalVisible: false,
    }

    handleOpenModal = (event) =>{
        this.setState({
            modalVisible: true,
        })
    }

    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false,
        })

    }

    render() {
    
        return (
            <HandleError> 
                <HomeLayout>
                    <Related />
                    <VideoPlayer 
                        autoPlay
                    />
                    <Categories 
                        categories = {this.props.data.categories}
                        handleOpenModal = {this.handleOpenModal }
                    />
                    {
                        this.state.modalVisible && //if condicional solo ve true o false
                        <ModalContainer>
                            <Modal
                                handleClick = {this.handleCloseModal}
                            >

                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
          
        )
    }
}

export default Home;