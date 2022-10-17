class Api::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.sample.greeting
    render json: @greeting
  end
end
