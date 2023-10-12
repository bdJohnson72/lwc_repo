/**
 * Created by bjohnson on 10/10/23.
 */

public with sharing class CountBackWards implements Queueable{

    Integer num;

    public CountBackWards(Integer num){
        this.num = num;
    }

    public void execute(QueueableContext qc){
        System.debug('Counting ' + this.num);
        AsyncOptions options = new AsyncOptions();
        options.maximumQueueableStackDepth = AsyncInfo.getMaximumQueueableStackDepth();
        options.maximumQueueableStackDepth = 5;
        System.debug(AsyncInfo.getCurrentQueueableStackDepth());
        System.debug(AsyncInfo.getMaximumQueueableStackDepth());
        System.debug(AsyncInfo.hasMaxStackDepth());
        if (num > 0 ){

            System.enqueueJob(new CountBackWards(num));
        }
    }



}