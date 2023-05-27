import {Component} from 'react'
import {
  PageContainer,
  FormContainer,
  Heading,
  Label,
  InputElement,
  Select,
  CustomButton,
  BgContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSize: '8',
    imageUrl: '',
    topText: '',
    bottomText: '',
    displayMeme: false,
    newFontSize: '8',
  }

  onUrlChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topText: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({newFontSize: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, newFontSize} = this.state
    if (imageUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({displayMeme: true, fontSize: newFontSize})
    }
  }

  render() {
    const {fontSize, imageUrl, topText, bottomText, displayMeme} = this.state
    console.log('index.js')
    return (
      <PageContainer>
        <FormContainer>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="imageURL">Image URL</Label>
          <InputElement
            onChange={this.onUrlChange}
            id="imageURL"
            type="text"
            placeholder="Enter the Image URL"
          />
          <Label htmlFor="topText">Top Text</Label>
          <InputElement
            onChange={this.onTopTextChange}
            type="text"
            id="topText"
            placeholder="Enter the Top Text"
          />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <InputElement
            onChange={this.onBottomTextChange}
            type="text"
            id="bottomText"
            placeholder="Enter the Bottom Text"
          />
          <Label htmlFor="select">Font Size</Label>
          <Select id="select" onChange={this.onChangeFontSize}>
            {fontSizesOptionsList.map(each => (
              <option
                key={each.optionId}
                selected={each.optionId === fontSize}
                value={each.optionId}
              >
                {each.displayText}
              </option>
            ))}
          </Select>
          <CustomButton type="submit" onClick={this.submitForm}>
            Generate
          </CustomButton>
        </FormContainer>
        {displayMeme && (
          <BgContainer data-testid="meme" imageUrl={imageUrl}>
            <Text fontSize={fontSize}>{topText}</Text>
            <Text fontSize={fontSize}>{bottomText}</Text>
          </BgContainer>
        )}
      </PageContainer>
    )
  }
}

export default MemeGenerator
