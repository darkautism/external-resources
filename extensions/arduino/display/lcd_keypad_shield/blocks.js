/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const colour = '#BBBB00';
    const secondaryColour = '#888800';

    Blockly.Blocks.lcd_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setCursorPosition = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETCURSORPOSITION,
                args0: [
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DATA'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setBackLight = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETBACKLIGHT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LCD_SATE_ON, 'on'],
                            [Blockly.Msg.LCD_SATE_OFF, 'off']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.lcd_setCursorStyle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SETCURSORSTYLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.LCD_SATE_DISPLAY, 'display'],
                            [Blockly.Msg.LCD_SATE_HIDE, 'hide']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STYLE',
                        options: [
                            [Blockly.Msg.LCD_STYLE_BLINK, 'blink'],
                            [Blockly.Msg.LCD_STYLE_NOBLINK, 'onBlink']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.lcd_left = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_LEFT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    
    Blockly.Blocks.lcd_right = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_RIGHT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    
    Blockly.Blocks.lcd_select = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_SELECT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.lcd_up = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_UP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    
    Blockly.Blocks.lcd_down = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LCD_DOWN,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    return Blockly;
}

exports = registerBlocks;
