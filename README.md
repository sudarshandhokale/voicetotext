# VoiceToText

Convert voice into text!

The new gem 'voicetotext' makes it easy to add voice recognition to your web pages. This gem allows fine control and flexibility over the voice recognition capabilities in Chrome version 25 and later.


## Installation

Add this line to your application's Gemfile:

```ruby
gem 'voicetotext'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install voicetotext

## Usage

Add this line to app/assets/javascripts/application.js

    //= require voicetotext


Add this code on your desired html.erb pages of your application

    <h3>Convert Voice into Text</h3>
    <p id="info"></p>
    <p><%= button_tag 'Start',id: "start_button", onclick: "startButton(event)"%></p>
    <p><%= text_area_tag :final_span, nil, rows: 10, cols: 50 %></p>


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


## License

Copyright (c) 2014 Sudarshan Dhokale

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
