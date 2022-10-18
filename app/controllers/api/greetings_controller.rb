class Api::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.sample.greeting
    render json: JSON.generate(@greeting)
  end
end
