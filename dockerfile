FROM ruby:3.2.2
WORKDIR /app
COPY Gemfile* .
RUN gem install bundler
RUN bundle install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "rails server -b 0.0.0.0"]